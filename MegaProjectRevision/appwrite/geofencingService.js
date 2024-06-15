

export class GeolocationFence
{
    latitude;
    longitude;
    //as soon as you create the object of this class we get the location containing the 
    // latitude and longitude and coordinates
    constructor()
    {
        try{
            if("geolocation" in navigator)
                {
                    navigator.geolocation.getCurrentPosition(async (position) => {
                        this.latitude=await position.coords.latitude
                        this.longitude=await position.coords.longitude
                        return {lat:this.latitude,lon:this.longitude}
                      },()=>{
                        return null
                      });
                }
        }catch(err)
        {
            console.log("Geolocation err", err.message)
        }
    }


    //this service essentially takes as input the latitude and longitude of the students and then finds the distance of the 
    //teacher with the students 
    //to calculate the distance we have used this formulae
    //You need Latitude and Longitude to calculate the distance between two locations with following formula:
    // dist=acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon2-lon1))*6371 (6371 is Earth radius in km.)
    async haversineDistance(stulat, stulon) 
    {
        function toRadians(degrees) {
            return degrees * Math.PI / 180;
        }
        var R = 6367.45; // Radius of the Earth in kilometers
        var dLat = toRadians(stulat - this.latitude);
        var dLon = toRadians(stulon - this.longitude);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = R * c; // Distance in kilometers
        return distance;
    }
}


const geofenc=new GeolocationFence()
export default geofenc //using this object we can call the method and find the distance between teacher and student