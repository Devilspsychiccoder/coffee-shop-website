#!/bin/bash

#The Ansible installation is for ubuntu server

sudo apt install python3
sudo apt update -y
sudo apt-add-repository ppa:ansible/ansible --yes
sudo apt update -y
sudo apt install ansible -y
sudo apt update -y
