package org.shiva.loanmanagementbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.shiva.loanmanagementbackend.model.Loan;
import java.util.List;

public interface LoanRepository extends JpaRepository<Loan, Long> {
    List<Loan> findByUserId(Long userId);
}