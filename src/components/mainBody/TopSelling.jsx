import React, {useState, useEffect} from 'react'
import './topSelling.css'
import CardFilter from './CardFilter'
import TopSellingItem from './TopSellingItem'

function TopSelling() {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState('Today')
    const handleFilterChange = filter => {
        setFilter(filter);
    }

    const fetchData = () => {
        fetch('http://localhost:4000/topselling')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="card top-selling overflow-auto">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body pb-0">
            <h5 className="card-title">
                Top Selling <span>| {filter}</span>
            </h5>

            <table className="table table-borderless datatable">
                <thead className="table-light">
                    <tr>
                        <th className="col">Preview</th>
                        <th className="col">Product</th>
                        <th className="col">Price</th>
                        <th className="col">Sold</th>
                        <th className="col">Revenue</th>
                    </tr>
                </thead>

                <tbody>
                    {items &&
                    items.length > 0 &&
                    items.map(item => <TopSellingItem key={item._id} item = {item} /> )}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TopSelling