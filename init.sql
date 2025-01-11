CREATE TABLE information (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT
);

-- Insert 30 records
INSERT INTO information (title, description) VALUES
('Docker Overview', 'Docker is a platform for developing, shipping, and running applications.'),
('Docker Containers', 'Docker containers are lightweight, portable, and efficient.'),
('Docker Images', 'Docker images are templates for creating containers.'),
('Docker Compose', 'Docker Compose is a tool for defining and running multi-container Docker applications.'),
('Ansible Overview', 'Ansible is an open-source automation tool used for configuration management.'),
('Ansible Playbooks', 'Ansible playbooks define configurations, deployment, and orchestration.'),
('Ansible Roles', 'Roles in Ansible allow you to organize playbooks into reusable components.'),
('Jenkins Overview', 'Jenkins is an open-source automation server for building, testing, and deploying software.'),
('Jenkins Pipelines', 'Jenkins pipelines provide a set of steps for automating tasks.'),
('Jenkins Jobs', 'Jenkins jobs define tasks to be executed within a Jenkins pipeline.'),
('Docker Swarm', 'Docker Swarm is a native clustering tool for Docker.'),
('Ansible Tower', 'Ansible Tower provides a user-friendly interface for managing Ansible automation.'),
('Jenkins CI/CD', 'Jenkins is widely used for continuous integration and continuous delivery.'),
('Docker Networking', 'Docker networking allows containers to communicate with each other and the outside world.'),
('Docker Volumes', 'Docker volumes are used for persistent storage in containers.'),
('Docker Build', 'Docker build command is used to build Docker images from a Dockerfile.'),
('Ansible Inventory', 'Ansible inventory is a collection of hosts and groups of hosts managed by Ansible.'),
('Jenkins Plugins', 'Jenkins plugins extend Jenkins functionality and integrate with other tools.'),
('Docker Registry', 'A Docker registry is a repository for storing Docker images.'),
('Docker Logs', 'Docker logs provide real-time information about running containers.'),
('Ansible Facts', 'Ansible facts are details about a host gathered during playbook execution.'),
('Jenkins Distributed Builds', 'Jenkins allows distributed builds by running builds on multiple machines.'),
('Docker Health Checks', 'Docker health checks are used to monitor the health of containers.'),
('Ansible Galaxy', 'Ansible Galaxy is a community hub for Ansible roles and collections.'),
('Jenkins Blue Ocean', 'Jenkins Blue Ocean is a modern user interface for Jenkins pipelines.'),
('Docker Compose Override', 'Docker Compose override allows you to modify settings in different environments.'),
('Ansible Ad-Hoc Commands', 'Ansible ad-hoc commands allow you to execute tasks without playbooks.'),
('Jenkins Pipeline as Code', 'Jenkins pipeline as code allows defining pipelines using code.'),
('Docker for Developers', 'Docker provides an easy way to set up development environments.'),
('Ansible in Cloud', 'Ansible is widely used in cloud automation for tasks like provisioning and deployment.');
