import GaugeChart from 'react-gauge-chart';

async function getData() {
  const res = await fetch('https://smart-garden-rho.vercel.app/plantdata', { next: { revalidate: 600 } })
 
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
      <div>{data[currplant]['soilTemp']}</div>
    </main>
  )
}