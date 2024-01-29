async function getData() {
  const res = await fetch('https://smart-garden-rho.vercel.app/plantdata', { next: { revalidate: 60 } })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData();
  var currplant = 0;
 
  return (
    <main>
      <h1>Plant {currplant}</h1>
      <p>
        {data[0]['soilTemp']/100.0 ?? 0} 
      </p>
    </main>
  )
}