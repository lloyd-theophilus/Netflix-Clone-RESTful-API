import './widgetLg.css'


export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className ={'widgetLgButton '  +  type}>{type}</button>
    };
    return (
        <div className = 'WidgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tbody>
                <tr className="widgetLgTR">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/portrait-of-middle-aged-african-american-man-with-happy-smile-picture-id1209007016?k=20&m=1209007016&s=612x612&w=0&h=4lCbl5Ug_pVoPUl2uo3on2hMPRMl9a7IJu0b9aNINVM=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Michael Kean</span>

                    </td>
                    <td className="widgetLgDate">23 Sep, 2021</td>
                    <td className="widgetLgAmount">GH₵ 20.00</td>
                    <td className="widgetLgStatus"><Button type = 'Approved'/></td>
                    
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/attractive-young-sports-woman-outdoors-picture-id478803372?k=20&m=478803372&s=612x612&w=0&h=6ozszVcV-DQPQLUCs4ECFYSWmo2TPgBTkp2H5MHpxWg=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Ivanka Clinton</span>

                    </td>
                    <td className="widgetLgDate">23 Sep, 2021</td>
                    <td className="widgetLgAmount">GH₵ 90.00</td>
                    <td className="widgetLgStatus"><Button type = 'Declined'/></td>
                    
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/happy-young-african-man-smiling-against-gray-wall-picture-id515320884?k=20&m=515320884&s=612x612&w=0&h=onPRixHO2xCmlyKzRAaAwl0IaCyAtj_LThVPbfJ8bvs=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Josh Kean</span>

                    </td>
                    <td className="widgetLgDate">23 Sep, 2021</td>
                    <td className="widgetLgAmount">GH₵ 100.00</td>
                    <td className="widgetLgStatus"><Button type = 'Pending'/></td>
                    
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://www.istockphoto.com/photo/mature-adult-female-hospital-administrator-poses-for-photo-gm1302507412-394229546?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fadmin&utm_term=admin%3A%3A%3A" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Karen Loster</span>

                    </td>
                    <td className="widgetLgDate">23 Sep, 2021</td>
                    <td className="widgetLgAmount">GH₵ 80.00</td>
                    <td className="widgetLgStatus"><Button type = 'Approved'/></td>
                    
                </tr>
                </tbody>
            </table>
        </div>
    )
}
