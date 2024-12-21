import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogOverlay,
} from "@/components/ui/dialog"; 

const UserDialog = ({ user, onClose }) => (
  <Dialog open={true} onOpenChange={onClose}> 
    <DialogOverlay /> 
    
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{`${user.first_name} ${user.last_name}`}</DialogTitle>
        <DialogDescription>
          <p>{`Contact Number: ${user.contact_number}`}</p>
          <p>{`City: ${user.city}`}</p>
        </DialogDescription>
      </DialogHeader>    
      <DialogClose onClick={onClose}>Close</DialogClose>
    </DialogContent>
  </Dialog>
);

export default UserDialog;
