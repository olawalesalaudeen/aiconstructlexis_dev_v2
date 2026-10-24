# G-Eval
**Type:** Measurement  
**Referenced in:** 18 papers  
**Also known as:** G-EVAL, G-Eval-4  

## State of the Field

**What it is.** Across papers, G-Eval is most commonly described as an LLM-based automated evaluation protocol for generated text, usually using GPT-4 to assign criterion-specific scores or 1 to 5 Likert-scale ratings from a prompt. Some descriptions emphasize step-by-step chain-of-thought or auto-CoT prompting, and one variant frames it as a logit-weighted method that reweights score tokens by the model's predicted probabilities to refine scoring granularity. Papers also mention variants and adaptations, including G-Eval-4, where GPT-4 is sampled 20 times and the average score is used, and GCC-Eval, which modifies and extends G-Eval for chess commentary.

**What it is claimed to measure.** Papers use it to measure 11 constructs and link it to one behavioral indicator. The most commonly linked constructs are coherence, fluency, relevance, ambiguity handling, and completeness, with additional reported uses for empathy, engagement, faithfulness, interpretability and explainability, naturalness, and patient-centricity. Overall, the reported measurement claims are spread across many qualitative dimensions rather than centered on one target, and the only linked behavioral indicator is chain of thought, which papers describe as related to G-Eval rather than as something it measures.

**Space of uses.** Papers often position it as an LLM-based evaluator within broader evaluation suites, including setups that place it alongside automatic evaluations and human evaluation. The only linked measurement instrument is human evaluation, and one paper reports that G-Eval correlates with human evaluation and shows the closest alignment with human ratings. A smaller line of work uses it as a baseline for LLM-based assessment, while other papers adapt it for domain-specific judging or ask GPT-4 to evaluate outputs step by step and assign a score for each criterion.

**Concerns raised.** One paper notes that the evaluation can be largely limited by the performance of the evaluator LLM itself.

## Sources

**[Learning to Summarize from LLM-generated Feedback](https://aclanthology.org/2025.naacl-long.38.pdf)**
> An automated evaluation protocol that uses a large language model (like GPT-4) to provide Likert-scale scores (1-5) for summary quality based on a given prompt.

**[CSEval: Towards Automated, Multi-Dimensional, and Reference-Free Counterspeech Evaluation using Auto-Calibrated LLMs](https://aclanthology.org/2025.naacl-long.279.pdf) (as "G-EVAL")**
> An auto-CoT prompting framework for natural language generation evaluation that uses chain-of-thought reasoning to generate evaluation steps, used here as a baseline for LLM-based assessment.

**[K-COMP: Retrieval-Augmented Medical Domain Question Answering With Knowledge-Injected Compressor](https://aclanthology.org/2025.naacl-long.351.pdf) (as "G-Eval-4")**
> Advanced LLM-based evaluation metric using GPT-4 to assess generated answers across multiple dimensions with high correlation to human judgment.

## Relationships

### G-Eval →
- **Human evaluation** (measurements) — *correlates*
  > G-Eval demonstrates the closest alignment with human ratings, with a Pearson correlation coefficient of 0.41.
  - [SPORTU: A Comprehensive Sports Understanding Benchmark for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/49c1879ae366644ce2c17fb39ddea982-Paper-Conference.pdf)

### → G-Eval
- **Coherence** (constructs) — *measured_by*
  > For LLM-based evaluation, we employed G-EVAL(Liu et al., 2023), a state-of-the-art metric designed to assess various qualitative aspects of large language model outputs, including Fluency, Coherence, Naturalness, Empathy, and Patient-Centricity, where higher scores indicate better performance. (Section 5.1)
  - [AI Chatbots as Professional Service Agents: Developing a Professional Identity](https://aclanthology.org/2025.emnlp-main.652.pdf)
- **Fluency** (constructs) — *measured_by*
  > For LLM-based evaluation, we employed G-EVAL(Liu et al., 2023), a state-of-the-art metric designed to assess various qualitative aspects of large language model outputs, including Fluency, Coherence, Naturalness, Empathy, and Patient-Centricity, where higher scores indicate better performance. (Section 5.1)
  - [AI Chatbots as Professional Service Agents: Developing a Professional Identity](https://aclanthology.org/2025.emnlp-main.652.pdf)
- **Relevance** (constructs) — *measured_by*
  > For Event Summarization, we adopt G-Eval (Liu et al., 2023b), an LLM-based metric that evaluates the relevance, consistency, and coherence of generated summaries against reference labels. (Section 4.3)
  - [MemInsight: Autonomous Memory Augmentation for LLM Agents](https://aclanthology.org/2025.emnlp-main.1683.pdf)
- **Faithfulness** (constructs) — *measured_by*
  > We provide the TALM with dialogue history that includes the API call results and use G-Eval (Liu et al., 2023) to assess whether the responses reflect the API call output. (Section 4.1)
  - [ToolDial: Multi-turn Dialogue Generation Method for Tool-Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/afb27164624b641e8fbba961b2301acf-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *measured_by*
  > G-EVAL generates criterion-specific scores, supporting fine-grained analysis of response quality, explainability, and reasoning. (Section 4.3)
  - [PAKTON: A Multi-Agent Framework for Question Answering in Long Legal Agreements](https://aclanthology.org/2025.emnlp-main.403.pdf)
- **Naturalness** (constructs) — *measured_by*
  > For LLM-based evaluation, we employed G-EVAL(Liu et al., 2023), a state-of-the-art metric designed to assess various qualitative aspects of large language model outputs, including Fluency, Coherence, Naturalness, Empathy, and Patient-Centricity, where higher scores indicate better performance. (Section 5.1)
  - [AI Chatbots as Professional Service Agents: Developing a Professional Identity](https://aclanthology.org/2025.emnlp-main.652.pdf)
- **Empathy** (constructs) — *measured_by*
  > For LLM-based evaluation, we employed G-EVAL(Liu et al., 2023), a state-of-the-art metric designed to assess various qualitative aspects of large language model outputs, including Fluency, Coherence, Naturalness, Empathy, and Patient-Centricity, where higher scores indicate better performance. (Section 5.1)
  - [AI Chatbots as Professional Service Agents: Developing a Professional Identity](https://aclanthology.org/2025.emnlp-main.652.pdf)
- **Patient-centricity** (constructs) — *measured_by*
  > For LLM-based evaluation, we employed G-EVAL(Liu et al., 2023), a state-of-the-art metric designed to assess various qualitative aspects of large language model outputs, including Fluency, Coherence, Naturalness, Empathy, and Patient-Centricity, where higher scores indicate better performance. (Section 5.1)
  - [AI Chatbots as Professional Service Agents: Developing a Professional Identity](https://aclanthology.org/2025.emnlp-main.652.pdf)

### Associated with
- **Chain of thought** (behaviors tasks)
  > Furthermore, we report G-EVAL (Liu et al., 2023a), an auto-CoT prompting framework, and the current state-of-the-art in NLG evaluation. (Section 5.1)
  - [CSEval: Towards Automated, Multi-Dimensional, and Reference-Free Counterspeech Evaluation using Auto-Calibrated LLMs](https://aclanthology.org/2025.naacl-long.279.pdf)
