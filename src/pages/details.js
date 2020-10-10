import Link from 'next/link';

const Details = () => {
    const datas = [
        {v: 'car', p: 'adi'},
        {v: 'bus', p: 'wawan'},
        {v: 'motor', p: 'rony'},
    ]

    return (
        <div>
            {
                datas.map((item)=> (
                    <div>
                        <Link as={`/${item.v}/${item.p}`} href='/[vehicle]/[person]'>
                            <a>Route to {`${item.v}/${item.p}`}</a>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Details ;
