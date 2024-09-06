import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';

const SearchExe = ({setExercises, bodyPart,setBodyPart}) => {

    const [search, setSearch] = useState('')
    
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() =>{
        const fetchExercisesData = async () =>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            if(Array.isArray(bodyPartsData)){
                setBodyParts(["all", ...bodyPartsData]) //Using API to held with finding exercises and storing them all inside an array to be outputted
            }


            
        }
        fetchExercisesData();
    })

    const handleSearch = async() =>{
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search) //these allow for more accuracy when searching certain exercises
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercises);
        }
    }

  return (
    <Stack alignItems="center" mt="30px" justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} mb='50px' textAlign='center' color='white'>
            Awesome Exercises
        </Typography>
        <Box position='relative' mb='72px' className="Searchbox">
            <TextField style={{}}
            sx={{
                input: {fontWeight: '700', border: 'none', borderRadius: '4px'},
                width: {lg: '800px', xs: '350px'},
                backgroundColor: 'white', borderRadius: '5px'
            }}
            height='76px' 
            value={search} 
            onChange={(e) => setSearch(e.target.value.toLowerCase())/*should make searching in capitals the same as searching in lower case*/} 
            placeholder='Search Exercises' 
            type='text'/>
            <Button className='search-btn'
            sx={{ //styling the button for the search on the mainpage
                bgcolor: 'var(--orange)', color:'white', textTransform: 'none', width: {lg: '175px', xs: '80px'},
                fontSize: {lgg: '20px', xs: '14px'},
                height: '56px',
                position: 'absolute',
                right: '0' //puts the button over the search so it feels more centralised
            }}
            onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box
        sx={{position: 'relative', width: '100%', p: '20px'}}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExe
