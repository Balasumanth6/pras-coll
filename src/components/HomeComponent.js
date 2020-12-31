import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Home extends Component {

	render() {
		return (
			<div className='container' align='center'> 
				<br />
				<div className='row align-items-start'>
					<div className='col-12 col-md m-1'>
						<Card>
							<CardImg src='./pic1.jpg' />
							<CardBody>
								<h5><CardTitle> pic1 </CardTitle></h5>
								<CardText> This is pic1's description </CardText> 
							</CardBody>
						</Card>
					</div>
					<div className='col-12 col-md m-1'>
						<Card>
							<CardImg src='./pic2.jpg' />
							<CardBody>
								<h5><CardTitle> pic2 </CardTitle></h5>
								<CardText> This is pic2's description </CardText> 
							</CardBody>
						</Card>
					</div>
					<div className='col-12 col-md m-1'>
						<Card>
							<CardImg src='./pic3.jpg' />
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