"use client"
import * as React from "react";
import { Grid,  Typography, CardContent,Avatar } from "@mui/material";
import BlankCard from "../../shared/BlankCard";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";

interface Item {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    username: string;
    phone: string;
  }
// Type for the DDcard props
interface StudentProps {
  data: Item[];
}
 
const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Student Detail",
    },
  ];
// Server component (renders on the server-side)
const StudentDetails: React.FC<StudentProps> = ({ data }) => {
    if (!Array.isArray(data)) {
        return <Typography>No valid data available</Typography>; // Fallback in case the data is not an array
      }
 
      return (
        <PageContainer title="Sample Form" description="This is a sample form page">
         <Breadcrumb title="Student Detail" items={BCrumb} />
            <Grid container spacing={3}>
          {data.map((user) => (
            <Grid item xs={12} sm={6} mt={4} key={user.id}>
                <BlankCard>
                  <CardContent sx={{ pt: 0 }}>
                  <Avatar
                alt={user.firstName}
                src={user.avatar}
                sx={{ width: 20, height: 20, marginBottom: 2 }}
              />
             
                <Typography variant="h6">{user.firstName} {user.lastName}</Typography>
                <Typography variant="body2" color="textSecondary">{user.username}</Typography>
                <Typography variant="body2" color="textSecondary">{user.email}</Typography>
             
                  </CardContent>
                </BlankCard>
            </Grid>
          ))}
        </Grid>


    {/* <Grid container spacing={3} sx={{ maxWidth: { lg: "1055px", xl: "1200px" } }}>
    <Grid item xs={12} sm={12} lg={12}>
        <Card>
          <CardContent sx={{ pt: 0 }}>
            <StudentDetails data={data}/>
          </CardContent>
        </Card>
      </Grid>
      
      
    </Grid> */}
  </PageContainer>
      
      );
};

export default StudentDetails;
