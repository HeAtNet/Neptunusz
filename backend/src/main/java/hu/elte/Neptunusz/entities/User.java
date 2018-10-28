package hu.elte.Neptunusz.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

    @Column(nullable = false)
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

    @Column(nullable = false)
    private Boolean is_del;
    // true = User deleted

    public enum Role {
    	STUDENT, TEACHER
    }

    public enum Status {
    	ACTIVE, PASSIVE
    }

    public void setId(Integer id) {
    	this.id = id;
    }

	public String getUsername() {
		return this.username;
	}

	public String getPassword() {
		return this.pass;
	}

	public Role getRole() {
		return this.role;
	}
}
