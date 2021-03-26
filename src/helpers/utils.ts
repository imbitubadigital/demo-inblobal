import { classToPlain, plainToClass } from 'class-transformer'
import { ClassType } from 'class-transformer/ClassTransformer'

export const getErrorValidator = (
  obj: Record<string, unknown> = {},
  path: string
): { message: string } | undefined =>
  path.split('.').reduce((a: any, b: string) => a && a[b], obj)

export const toIntOrNull = (value: string): number | null =>
  value ? parseInt(value, 10) : null
export const toStringOrNull = (value: number): string | null =>
  value ? String(value) : null

export const toDateOrNull = (value: string): string | null => value || null
export const toBoolOrNull = (value: boolean): boolean | null =>
  typeof value === undefined ? null : value
export const toNull = (value: string): string | null => value || null

export function transformerByDTO<T, V>(cls: ClassType<T>, plain: V): any {
  return classToPlain(plainToClass(cls, plain))
}

type SituationType =
  | 'accepted'
  | 'refused'
  | 'transit'
  | 'waiting'
  | 'delivered'
  | 'canceled'
export const getSituationPill = (value: number): SituationType => {
  if (value <= 2) {
    return 'waiting'
  }
  if (value === 3) {
    return 'refused'
  }
  if (value === 4) {
    return 'accepted'
  }
  if (value === 5) {
    return 'transit'
  }
  if (value === 6) {
    return 'canceled'
  }
  if (value >= 7) {
    return 'delivered'
  }

  return 'waiting'
}

export const slicePhone = (
  phone: string
): { phoneAreaCode: string; phoneNumber: string } => {
  const phoneClean: string = phone.replace(/[^0-9]+/g, '')
  const areaCode = phoneClean ? phoneClean.slice(0, 2) : ''
  const number = phoneClean ? phoneClean.slice(2, phoneClean.length) : ''
  return { phoneAreaCode: areaCode, phoneNumber: number }
}
export const uniPhone = (phone: {
  phoneAreaCode: string
  phoneNumber: string
}): string => {
  return `${phone.phoneAreaCode}${phone.phoneNumber}`
}
