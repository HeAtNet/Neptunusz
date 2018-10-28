package hu.elte.Neptunusz.entities;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class User implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    // Neptunusz code

    @Column
    @NotNull
    private String name;
    // Full name

    @Column
    @NotNull
    private String mail;
    // E-mail address

    @Column
    @NotNull
    private String pass;
    // Password

    @Column
    @CreationTimestamp
    private LocalDateTime start_date;
    // DateTime of the registration

    @Column
    @NotNull
    private String status;
    // ACTIVE or PASSIVE

    @Column
    @NotNull
    private String role;
    // STUDENT or TEACHER

    @Column
    private Boolean is_del;
    // true = User deleted
    
    public void setId(Integer id) {
    	this.id = id;
    }

    public String toString() {
    	return "asdf";
    }
}
