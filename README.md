# bunge-ansible

Ansible configuraton for my machine setup.

To install:

```sh
pip3 install --user ansible
ansible-galaxy collection install community.general
ansible-playbook -i inventory site.yml --ask-become-pass --ask-vault-pass
```
