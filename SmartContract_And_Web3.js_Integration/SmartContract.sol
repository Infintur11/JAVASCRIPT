pragma solidity ^0.8.16;

contract Gaurav{
    mapping(string=>bool) public IDs;

    function CreateYourUniqueId(string memory _id)public{
        require(IDs[_id]==false,"Id already generated please enter different combination");
        IDs[_id]=true;
    }
}