import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookItem(props){
    return(
        <div>
            <Card>
                <Card.Header>{props.mybook.title}</Card.Header>
                <Card.Body>
                    <blockquote className='blockquote mb-0'>
                        <img src={props.mybook.thumbnailUrl}></img>
                        <foot>
                            {props.mybook.authors[0]}
                        </foot>
                    </blockquote>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookItem;