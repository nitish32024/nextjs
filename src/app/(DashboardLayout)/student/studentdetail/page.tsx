

import React from 'react'
import { Grid,Card, Typography ,CardContent} from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import StudentDetails from '@/app/components/views/StudentViews/StudentDetails';
import ChildCard from "@/app/components/shared/ChildCard";
import { fetchItems ,fetchItems_axios} from "@/app/api/services/studentservices/api";
import { Item } from "../../../api/interfaces/studentinterface"; // Import the interfaces

// export interface Item {
//     id: number;
//     firstName: string;
//     lastName: string;
//     email: string;
//     avatar: string;
//     username: string;
//     phone: string;
//   }
  let data: Item[] = [];
  let error: string | null = null;
  
const StudentDetail =  async () => {
    try {
        // data = await fetchItems(); // Fetch data from the API
        data = await fetchItems_axios(); // Fetch data from the API
        // console.log('api data is',JSON.stringify(data));
        // console.log('data length is',data.length);
      } catch (err) {
        error = "Failed to fetch data";
      }
      if (error) {
        return (
          <PageContainer title="Basic Sample 2" description="Data fetch from API">
            <Grid container spacing={3} sx={{ maxWidth: { lg: "1055px", xl: "1200px" } }}>
              <Grid item xs={12} sm={12} lg={12}>
                <ChildCard>
                  <Typography variant="body1" color="error">
                    Error: {error}
                  </Typography>
                </ChildCard>
              </Grid>
            </Grid>
          </PageContainer>
        );
      }

    
  return (
    <PageContainer title="Sample Form" description="This is a sample form page">
        <StudentDetails data={data}/>
  </PageContainer>
  )
}

export default StudentDetail
