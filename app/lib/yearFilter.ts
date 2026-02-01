import _2025 from '@/assets/data/2025/index.json'
import _2024 from '@/assets/data/2024/index.json'
import _2023 from '@/assets/data/2023/index.json'
import _2022 from '@/assets/data/2022/index.json'
import _2021 from '@/assets/data/2021/index.json'
import _2020 from '@/assets/data/2020/index.json'
import _2019 from '@/assets/data/2019/index.json'

/**
 * Get available years based on imported data files
 * Returns array of years sorted in descending order (newest first)
 */
export function getAvailableYears(): string[] {
  return ['2025', '2024', '2023', '2022', '2021', '2020', '2019']
}

/**
 * Get year range for display (e.g., "2019-2025")
 * Returns string showing earliest to latest year
 */
export function getYearRange(): string {
  const years = getAvailableYears()
  if (years.length === 0) return ''
  const oldest = years[years.length - 1] // Last in desc array
  const newest = years[0] // First in desc array
  return `${oldest}-${newest}`
}

/**
 * Get question count for each year
 * Returns object with year as key and count as value
 */
export function getYearCounts(): Record<string, number> {
  return {
    '2025': _2025.length,
    '2024': _2024.length,
    '2023': _2023.length,
    '2022': _2022.length,
    '2021': _2021.length,
    '2020': _2020.length,
    '2019': _2019.length,
  }
}

/**
 * Filter questions by year
 * Uses folder structure to map to correct data
 * 
 * @param year - Year to filter by, or 'all' for all years
 * @returns Filtered array of questions
 */
export function filterQuestionsByYear(year: string) {
  if (year === 'all') {
    return [..._2025, ..._2024, ..._2023, ..._2022, ..._2021, ..._2020, ..._2019]
  }
  
  const yearDataMap: Record<string, any[]> = {
    '2025': _2025,
    '2024': _2024,
    '2023': _2023,
    '2022': _2022,
    '2021': _2021,
    '2020': _2020,
    '2019': _2019,
  }
  
  return [...(yearDataMap[year] || [])]
}
