import React from 'react'
import { appName } from '../src/Api/FetcherApi'
import CommonSEO from '../src/components/SEO/SEO'

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json()

    return { props: { data } }
}

const place = ({ data }) => {

    return (
        <>
            <CommonSEO title={`${appName}`} description={`${appName},  `} keywords={`${appName}, Host, Ghost`}/>
            <div className='margin-left margin-right margin-big'>
                <div className='padding responsive'>
                    <table className=' table-all'>
                        <thead>
                            <tr>
                                <th>UserId= {data ? data.length : 0}</th>
                                <th>Title</th>
                                <th>completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? data.map((iteme, index) =>
                            <tr key={index}>
                                <td>{iteme.userId}</td>
                                <td>{iteme.title}</td>
                                <td>{iteme.completed ? <span className=' fas fa-check'></span>:<span className=' fas fa-times'></span>}</td>
                            </tr>
                            )
                            : <tr><td>No Users</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default place