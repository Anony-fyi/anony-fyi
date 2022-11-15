import db from '../db'

export default async function Page() {
  // Fetch data directly in a Server Component
  const companies = await db.getCompanies();
  
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-16">
          <h1 className="mt-2 text-gray-900 text-2xl font-bold">
            Companies
          </h1>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {companies.map(({name, created_at}, key) => (
            <li key={key} className="flex py-4">
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{created_at}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}