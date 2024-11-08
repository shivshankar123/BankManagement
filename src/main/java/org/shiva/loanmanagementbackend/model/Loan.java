package org.shiva.loanmanagementbackend.model;


import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double amount;
    private int tenure;
    private String status; // Pending, Approved, Rejected

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
