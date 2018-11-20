package hu.elte.Neptunusz.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import hu.elte.Neptunusz.entities.Exam.ExamType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String title;
	
	@Column(nullable = false)
	private String text;
	
	@ManyToOne
	@JsonIgnore
	private User sender;
	
	@ManyToOne
	@JsonIgnore
	private User adresse;
	
	@Column(nullable = false, name = "time_of_message")
    @CreationTimestamp
    private LocalDateTime msgTime;
}
