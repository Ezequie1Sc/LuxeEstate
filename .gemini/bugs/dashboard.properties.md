## Error Type
Console Error

## Error Message
MISSING_MESSAGE: Could not resolve `Admin.properties` in messages for locale `es`.


    at AdminPropertyFilters (components/AdminPropertyFilters.tsx:9:28)

## Code Frame
   7 |
   8 | export default function AdminPropertyFilters() {
>  9 |   const t = useTranslations('Admin.properties')
     |                            ^
  10 |   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  11 |   const router = useRouter()
  12 |   const searchParams = useSearchParams()

Next.js version: 16.1.6 (Turbopack)
