import type { BlogCategory } from '@rentacar-main/logic/src'

const CATEGORY_LABELS: Record<string, string> = {
  guias: 'Guías',
  destinos: 'Destinos',
  tips: 'Tips',
  rutas: 'Rutas'
}

const CATEGORY_ICONS: Record<string, string> = {
  guias: 'i-lucide-book-open',
  destinos: 'i-lucide-map-pin',
  tips: 'i-lucide-lightbulb',
  rutas: 'i-lucide-route'
}

export function useBlogUtils() {
  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  function formatCategory(category: string): string {
    return CATEGORY_LABELS[category] || category
  }

  function getCategoryIcon(category: string): string {
    return CATEGORY_ICONS[category] || 'i-lucide-file-text'
  }

  return { formatDate, formatCategory, getCategoryIcon }
}
