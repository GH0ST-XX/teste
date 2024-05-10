import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class SecurityQuiz {

    static class Question {
        String question;
        List<String> options;
        String answer;
        String feedback;

        public Question(String question, List<String> options, String answer, String feedback) {
            this.question = question;
            this.options = options;
            this.answer = answer;
            this.feedback = feedback;
        }
    }

    public static void main(String[] args) {
        List<Question> questions = initializeQuestions();

        Scanner scanner = new Scanner(System.in);
        int score = 0;
        int totalQuestions = questions.size();

        System.out.println("Bem-vindo ao Quiz sobre Segurança Online!");
        System.out.println("Responda às seguintes perguntas:");

        for (int i = 0; i < totalQuestions; i++) {
            Question q = questions.get(i);
            System.out.println("\nQuestão " + (i + 1) + ": " + q.question);

            for (int j = 0; j < q.options.size(); j++) {
                System.out.println((j + 1) + ". " + q.options.get(j));
            }

            System.out.print("Escolha a opção correta (digite o número da opção): ");
            String userAnswer = scanner.nextLine();

            if (isNumeric(userAnswer)) {
                int index = Integer.parseInt(userAnswer) - 1;
                if (index >= 0 && index < q.options.size()) {
                    userAnswer = q.options.get(index);
                }
            }

            if (userAnswer != null && userAnswer.equalsIgnoreCase(q.answer)) {
                System.out.println("Resposta correta!");
                score++;
            } else {
                System.out.println("Resposta incorreta!");
            }
            System.out.println("Feedback: " + q.feedback);
        }

        evaluateScore(score, totalQuestions);
    }

    private static List<Question> initializeQuestions() {
        List<Question> questions = new ArrayList<>();

        questions.add(new Question(
                "O que são senhas seguras?",
                List.of("Senhas curtas e simples", "Senhas longas e complexas", "Senhas com nomes comuns"),
                "Senhas longas e complexas",
                "Senhas seguras devem ser longas e incluir letras maiúsculas, minúsculas, números e símbolos."
        ));
        // Adicionar outras perguntas aqui

        return questions;
    }

    private static boolean isNumeric(String str) {
        return str != null && str.matches("\\d+");
    }

    private static void evaluateScore(int score, int totalQuestions) {
        double percentage = (score / (double) totalQuestions) * 100;
        System.out.printf("\nVocê respondeu corretamente a %d de %d perguntas (%.2f%%)\n", score, totalQuestions, percentage);

        if (percentage < 50) {
            System.out.println("Você precisa estudar mais sobre segurança online. Recomendamos revisar os conceitos básicos.");
        } else if (percentage < 80) {
            System.out.println("Você tem um bom conhecimento sobre segurança online, mas ainda há espaço para melhorias.");
        } else {
            System.out.println("Parabéns! Seu conhecimento sobre segurança online é sólido.");
        }
    }
}
