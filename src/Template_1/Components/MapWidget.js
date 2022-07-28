import './MapWidget.css';

const MapWidget = ()=>{
    return(
        <div className='map-widget-container'>
            <div className='map-widget-container-top'>
                <span>In Vatra Dornei</span>
            </div>
            <div className='map-widget-container-bottom'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37500.68340867107!2d25.352079118561534!3d47.25751691286002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47358f5ee472d239%3A0xb1223f946fe1c41c!2sPensiunea%20Laricea!5e0!3m2!1sro!2sro!4v1659002489020!5m2!1sro!2sro" 
                width="100%" 
                height="100%" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
export default MapWidget;
