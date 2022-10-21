interface errorProps{
	statusCode:Number
}

function Error(props:errorProps) {
	
	return (<>
	  <h1>
		{props.statusCode
		  ? `An error ${props.statusCode} occurred on server`
		  : 'An error occurred on client'}
	  </h1>
	  <p>Order from the register</p></>
	)
  }
  
  Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
  }
  
  export default Error
  