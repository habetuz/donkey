import { describe, it, expect } from 'vitest'
import { addNumbers } from '../code'

describe('addNumbers', () => {
  it('should return the sum of two positive numbers', () => {
    expect(addNumbers(2, 3)).toBe(5)
  })

  it('should return the sum of a positive and a negative number', () => {
    expect(addNumbers(5, -3)).toBe(2)
  })

  it('should return the sum of two negative numbers', () => {
    expect(addNumbers(-4, -6)).toBe(-10)
  })

  it('should return 0 when both numbers are 0', () => {
    expect(addNumbers(0, 0)).toBe(0)
  })

  it('should handle decimal numbers correctly', () => {
    expect(addNumbers(1.5, 2.3)).toBeCloseTo(3.8)
  })
})
