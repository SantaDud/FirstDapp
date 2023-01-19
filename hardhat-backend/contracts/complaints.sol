// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.10;

struct Complaint {
    uint256 complaintNumber;
    address complainant;
    string complainantName;
    string complainantAddress;
    string incident;
    string timeOfIncident;
}

contract Complaints {
    Complaint[] public complaints;
    uint256 complaintNumber = 1;
    Complaint private tempComplaint;

    function setComplaintNumber(uint256 _number) public {
        tempComplaint.complaintNumber = _number;
    }

    function setComplainant(address _complainant) public {
        tempComplaint.complainant = _complainant;
    }

    function setComplainantDetails(
        string memory _name,
        string memory _address,
        string memory _incident,
        string memory _time
    ) public {
        tempComplaint.complaintNumber = complaintNumber;
        complaintNumber++;
        tempComplaint.complainant = msg.sender;
        tempComplaint.complainantName = _name;
        tempComplaint.complainantAddress = _address;
        tempComplaint.incident = _incident;
        tempComplaint.timeOfIncident = _time;
        addComplaint();
    }

    function addComplaint() public {
        complaints.push(tempComplaint);
    }

    function removeComplaint(uint256 index) public {
        // if (index >= complaints.length) return;

        for (uint i = complaints.length - 1; i > index - 1; i--)
            complaints[i].complaintNumber = complaints[i - 1].complaintNumber;

        for (uint i = index - 1; i < complaints.length - 1; i++)
            complaints[i] = complaints[i + 1];

        complaintNumber--;
        complaints.pop();
    }

    function returnComplaints() public view returns (Complaint[] memory) {
        return complaints;
    }

    function getSingleComplaint(
        uint256 index
    ) public view returns (Complaint memory) {
        return complaints[index - 1];
    }

    function updateComplaint(
        uint256 index,
        string memory _name,
        string memory _address,
        string memory _incident,
        string memory _time
    ) public {
        complaints[index - 1].complainantName = _name;
        complaints[index - 1].complainantAddress = _address;
        complaints[index - 1].incident = _incident;
        complaints[index - 1].timeOfIncident = _time;
    }

    function lastComplaint() public view returns (Complaint memory) {
        return tempComplaint;
    }
}
