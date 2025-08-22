import { getImageUrl } from "./util";

export function Avatar({person, size = 100, isSepia, thickBorder}){
    return(
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        
        />

    );
}