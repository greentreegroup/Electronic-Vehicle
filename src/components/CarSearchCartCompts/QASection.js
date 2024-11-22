import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const QASection = ({ car }) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [QAList, setQAList] = useState([]);

  useEffect(() => {
    const fetchQA = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://prod-41.southeastasia.logic.azure.com/workflows/e7b253f5526144a789065af0099346dd/triggers/manual/paths/invoke/id/${car.id}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=bq9ksrY0yJv9yOFpynoMTYoCGOJ_Jcc9IXF5G7USAO8`, {
                headers: {"content-type": "application/json"}
            });
            if (!response.ok) throw new Error("Q and A data could not be retreived");
            const data = await response.json();
            setQAList(data);
        } catch (error){
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    fetchQA();
  }, []);

  if (loading) {
    return  <Box
                sx={{
                display: 'flex',
                backgroundColor: "#fff",
                padding: { xs: "1rem 0", sm: "0 0rem" }, // Remove left/right padding below 600px
                borderRadius: "10px",
                boxShadow: 2,
                margin: { xs: '0', sm: '0 1rem', md: '0 4rem' }, // Responsive margins
                marginBottom: 4,
                marginTop: 4,
                textAlign:"center"
                }}
            >
                <Typography sx={{textAlign:"center"}}>Loading Q and A data...</Typography>

            </Box>
  }

  if (error){
    return <div className="error-message">There was an error loading the Q and A data: {error}</div>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: "#fff",
        padding: { xs: "1rem 0", sm: "0 0rem" }, // Remove left/right padding below 600px
        borderRadius: "10px",
        boxShadow: 2,
        margin: { xs: '0', sm: '0 1rem', md: '0 4rem' }, // Responsive margins
        marginBottom: 4,
        marginTop: 4
      }}
    >
        <Box sx={{ width: '100%', marginTop:"1rem"}}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem", marginTop: "1rem", textAlign:"center", fontSize: {xs: '15px', md:'20px'}, color:"#f57b18"}}>
                Questions and Answers
            </Typography>
            {QAList.length > 0 ? (
                <Typography>
                    {QAList.map((curQuestion) => (
                        <Typography sx={{margin:"10px", textAlign:"left", marginBottom:"3rem"}}>
                            <Typography><b>Q: {curQuestion.question}</b></Typography>
                            <Typography><b>A: </b>{curQuestion.answer}</Typography>
                        </Typography>
                    ))}
                </Typography>
                ) : (
                <Typography sx={{marginBottom:"10px"}}>
                    No questions at the moment.
                </Typography>
                )
            }
        </Box>
    </Box>
  );
};

export default QASection;
