import styles from './page.module.css';

async function getData() {
  const res = await fetch('https://smart-garden-rho.vercel.app/plantdata')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData();
  var currplant = 0;
  const headers = {'temp':50.0, 'humidity':100.0, 'soilMoisture':100.0, 'pump':1, 'soilTemp':50.0, 'sunlight':100.0}

  // temp: 0 - 50
  // humidity : 0 - 100
  // soilMoisture : 0 - 100
  // pump : 0 - 1
  // soilTemp: 0 - 50
  // sunlight0 - 100
 
  return (
    <main>
      <body>
        <h1>Plant {currplant}</h1>
        <div className={styles.main}>
          {Object.keys(headers).map((val, index) => (
            <div className={styles.card} key={index}>
              {val.charAt(0).toUpperCase() + val.slice(1) + ": "}
              <div className={styles.gauge} style={{"--percent": data[0][val]/headers[val] * 100 ?? 0}}>
                {data[0][val] + "/" + headers[val] ?? 0} 
              </div>
            </div>
          ))}
        </div>
      </body>
    </main>
  )
}