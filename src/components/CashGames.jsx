import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import LeaderBoardItems from "./LeaderBoardItems";

const CashGames = ({ title }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: "background.default",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        border: "4px solid #25292B",
      }}
    >
      <CardHeader
        title={title}
        sx={{
          bgcolor: "background.secondary",
          textAlign: "center",
          height: "70px",
          fontSize: "18px",
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Typography sx={{ marginRight: "12px" }}>
            ჰოლდემის TOP20 ლიდერბორდი
          </Typography>
          <img
            src={process.env.PUBLIC_URL + "/assets/example-icon.png"}
            alt="info"
          />
        </Box>
        <Card
          sx={{ bgcolor: "background.secondary", padding: "32px 32px 20px" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "20px 152px 20px 10px ",
            }}
          >
            <Typography>ადგილი</Typography>
            <Typography>
              <img src="" alt="" style={{ marginleft: "7px" }} />
              ვაუჩერი
            </Typography>
            <Typography>პრიზი</Typography>
          </Box>
          <LeaderBoardItems
            place="1"
            voucher="-"
            prize="A კატეგორიის საგზური"
            icon={process.env.PUBLIC_URL + "/assets/travel-icon-sm.png"}
          />
          <LeaderBoardItems
            place="2"
            voucher="-"
            prize="B კატეგორიის საგზური"
            icon={process.env.PUBLIC_URL + "/assets/ticket-icon-sm.png"}
          />
          <LeaderBoardItems
            place="3"
            voucher="1 500 ₾"
            prize="სპეც. ტურნირის ბილეთი"
            icon=""
          />
          <LeaderBoardItems
            place="4"
            voucher="1 200 ₾"
            prize="B კატეგორიის საგზური"
            icon={process.env.PUBLIC_URL + "/assets/ticket-icon-sm.png"}
          />
          <LeaderBoardItems
            place="5"
            voucher="-"
            prize="B კატეგორიის საგზური"
            icon={process.env.PUBLIC_URL + "/assets/ticket-icon-sm.png"}
          />
          <LeaderBoardItems
            place="6"
            voucher="-"
            prize="B კატეგორიის საგზური"
            icon={process.env.PUBLIC_URL + "/assets/ticket-icon-sm.png"}
          />
          <LeaderBoardItems
            place="7"
            voucher="-"
            prize="B კატეგორიის საგზური"
            icon={process.env.PUBLIC_URL + "/assets/ticket-icon-sm.png"}
          />
        </Card>
      </CardContent>
    </Card>
  );
};

export default CashGames;
