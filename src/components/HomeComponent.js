import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import pic1 from '../pic1.jpg';
import pic2 from '../pic2.jpg';
import pic3 from '../pic3.jpg';

class Home extends Component {

	render() {
		return (
			<div className='container' align='center'> 
				<br />
				<div className='row align-items-start'>
					<div className='col-12 col-md m-1'>
						<Card>
							<CardImg src={pic1} />
							<CardBody>
								<h5><CardTitle> pic1 </CardTitle></h5>
								<CardText> This is pic1's description </CardText> 
							</CardBody>
						</Card>
					</div>
					<div className='col-12 col-md m-1'>
						<Card>
							<CardImg src={pic2} />
							<CardBody>
								<h5><CardTitle> pic2 </CardTitle></h5>
								<CardText> This is pic2's description </CardText> 
							</CardBody>
						</Card>
					</div>
					<div className='col-12 col-md m-1'>
						<Card>
							<CardImg src={pic3} />
							<CardBody>
								<h5><CardTitle> pic3 </CardTitle></h5>
								<CardText> This is pic3's description </CardText> 
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;