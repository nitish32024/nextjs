// components/data-display/DDcard.tsx
import * as React from "react";
import { Card, CardContent, Typography, Grid, Avatar } from "@mui/material";

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
interface DDcardProps {
  data: Item[];
}

const DDcard: React.FC<DDcardProps> = ({ data }) => {
    if (!Array.isArray(data)) {
      return <Typography>No valid data available</Typography>; // Fallback in case the data is not an array
    }
  
    return (
      <Grid container spacing={3}>
        {data.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
              <Avatar
                alt={user.firstName}
                src={user.avatar}
                sx={{ width: 56, height: 56, marginBottom: 2 }}
              />
              <CardContent>
                <Typography variant="h6">{user.firstName} {user.lastName}</Typography>
                <Typography variant="body2" color="textSecondary">{user.username}</Typography>
                <Typography variant="body2" color="textSecondary">{user.email}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default DDcard;