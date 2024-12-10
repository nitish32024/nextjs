"use client"

import React from 'react'
import { CardContent, Grid } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import BlankCard from "@/app/components/shared/BlankCard";
import PlacementRegistrationForm from '@/app/components/views/StudentViews/PlacementRegistrationForm';
 
 
const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Placement Registration",
  },
];
const PlacementRegistation = () => {
  return (
    <PageContainer title="Sample Form" description="This is a sample form page">
    <Breadcrumb title="Placement Registration" items={BCrumb} />
   <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <BlankCard>
          <CardContent sx={{ pt: 0 }}>
           <PlacementRegistrationForm/>
          </CardContent>
        </BlankCard>
      </Grid>
      
    </Grid>
  </PageContainer>
  )
}

export default PlacementRegistation
