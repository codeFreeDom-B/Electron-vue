
import { Clipboard } from '@antv/x6-plugin-clipboard'
export function useClipboard() {
  return new Clipboard({
    enabled: true,
  })
}