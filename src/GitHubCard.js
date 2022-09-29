import Card from 'react-bootstrap/Card';

function GitHubCard() {
    return (
        <Card style={{ width: "50%", minHeight: "200px", backgroundColor: "blue" }} > 
            <Card.Text> Github User Name</Card.Text> 
            <Card.Img style={{height: "150px", width: "150px"}} src="./img/cat.jpg" alt="card image"/>
            <Card.Text> Blurb </Card.Text> 
        </Card>

    )
}

export default GitHubCard;