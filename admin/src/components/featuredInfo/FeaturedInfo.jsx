import './FeaturedInfo.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className = 'featuredInfo'>
            <div className="featuredItem">
                <span className = 'featuredTitle'>Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className = 'featuredMoney'>GH₵5,873.00</span>
                    <span className = 'featuredMoneyRate'> -309.00 <ArrowDownward className = 'featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>

            <div className="featuredItem">
                <span className = 'featuredTitle'>Sales</span>
                <div className="featuredMoneyContainer">
                    <span className = 'featuredMoney'>GH₵4,873.00</span>
                    <span className = 'featuredMoneyRate'> -209.00 <ArrowDownward className = 'featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>

            <div className="featuredItem">
                <span className = 'featuredTitle'>Cost</span>
                <div className="featuredMoneyContainer">
                    <span className = 'featuredMoney'>GH₵3,873.00</span>
                    <span className = 'featuredMoneyRate'> +109.00 <ArrowUpward className = 'featuredIcon'/></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
        </div>
    )
}
