import ReactLoading from 'react-loading';

export default function Loading() {
    return(
        <div className="container-loading">
            
            <ReactLoading type={'spin'} color={'#3a8bee'} height={'7%'} width={'7%'} />

        </div>
    )
}