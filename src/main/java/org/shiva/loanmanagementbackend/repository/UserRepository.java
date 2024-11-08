package org.shiva.loanmanagementbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.shiva.loanmanagementbackend.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
