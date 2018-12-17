package hu.elte.Neptunusz.entities;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
//@EqualsAndHashCode
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column(nullable = false)
    private String username;
    // Neptunusz code

    @Column(nullable = false)
    private String name;
    // Full name

    //@Column(nullable = false)
    private String mail;
    // E-mail address

    @Column(nullable = false)
    private String pass;
    // Password

    @Column(nullable = false)
    @CreationTimestamp
    private LocalDateTime start_date;
    // DateTime of the registration

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status;
    // ACTIVE or PASSIVE

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;
    // STUDENT or TEACHER
    
    @OneToMany(mappedBy = "adresse")
    @Column
    private List<Message> inbox;
    
    @OneToMany(mappedBy = "sender")
    @Column
    private List<Message> sent;

    @ManyToMany
    @JoinTable
    private List<Exam> exams;
    
    @ManyToMany
    @JoinTable
    private List<Subject> subjects;
    
    @ColumnDefault(value = "0")
    private Boolean is_del;
    // true = User deleted

    public enum Role {
    	ROLE_STUDENT, ROLE_TEACHER
    }

    public enum Status {
    	ACTIVE, PASSIVE
    }

}
