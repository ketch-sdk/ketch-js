import { loadScript } from './index'

describe('index', () => {
  describe('loadScript', () => {
    const appendChildMock = jest.spyOn(document.head, 'appendChild')

    beforeEach(() => {
      delete (window as any)['semaphore']
      delete (window as any)['ketch']

      appendChildMock.mockImplementation(node => {
        node.dispatchEvent(new Event('load'))
        return node
      })
    })

    it('returns api if already loaded', async () => {
      window.semaphore = window.semaphore || []
      window.semaphore.loaded = true
      return expect(loadScript('axonic', 'axonic')).resolves.toBeTruthy()
    })

    it('ensures semaphore is initialized', async () => {
      expect(window.semaphore).toBeUndefined()
      await expect(loadScript('axonic', 'axonic')).resolves.toBeTruthy()
      expect(Array.from(window.semaphore as any)).toStrictEqual([])
      expect(window.semaphore.loaded).toBeFalsy()
    })

    it('ensures ketch function is initialized', async () => {
      expect(window.ketch).toBeUndefined()
      await expect(loadScript('axonic', 'axonic')).resolves.toBeTruthy()
      expect(window.ketch).toBeDefined()
    })

    it('loads the script if not already loaded', () => {
      return expect(loadScript('axonic', 'axonic')).resolves.toBeTruthy()
    })

    it('rejects if script loading fails', () => {
      jest.spyOn(document, 'head', 'get').mockImplementation()
      const appendChildMock = jest.spyOn(document.body, 'appendChild')
      appendChildMock.mockImplementation(node => {
        const e = new Event('error') as any
        e['error'] = 'unknown'
        node.dispatchEvent(e)
        return node
      })
      return expect(loadScript('axonic', 'axonic')).rejects.toBe('unknown')
    })
  })
})
