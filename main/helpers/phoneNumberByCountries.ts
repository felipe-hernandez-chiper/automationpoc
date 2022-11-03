import { NumbersByCountry } from '../dtos/onboarding/onboarding'

const numbersByCountry : NumbersByCountry[] = [
    {"country" : "colombia", "phoneNumber" : "3132801892", "code": "co"},
    {"country" : "brazil", "phoneNumber" : "11986045557", "code": "br"},
    {"country" : "mexico", "phoneNumber" : "5534168010", "code": "mx"}
]

export const phoneBycountry = (countryName: string) => {
    const countryInfo : NumbersByCountry[] = numbersByCountry.filter(countryData => countryData.country === countryName)
    
    if(!countryInfo){
        throw "the country does not contain information to test"
    }
    
    return countryInfo
}