# Bamboogle
**Type:** Measurement  
**Referenced in:** 15 papers  

## State of the Field

**What it is.** Across papers, Bamboogle is most commonly treated as a question answering benchmark for complex questions, often described as a multi-hop dataset involving web search and reasoning over multiple documents. It is also used as an unseen or out-of-domain evaluation task for RAG-tuned models, and one paper describes it as containing questions that Google answers incorrectly. The descriptions vary on coverage: some authors place it with datasets "derived from Wikipedia documents", while another says it "requires knowledge beyond Wikipedia's coverage".

**What it is claimed to measure.** Papers link Bamboogle to 2 behavioral indicators and 2 constructs. The prevailing usage is to measure multi-hop question answering, with a broader question answering framing also recurring. A smaller line of work reports that it measures compositional reasoning and generalization, including out-of-domain generalization.

**Space of uses.** Papers usually use Bamboogle directly alongside other question answering benchmarks, especially HotPotQA, MuSiQue, 2WikiMultiHopQA, WebQuestions, and PopQA. They variously position it as one of several established or widely used multi-hop QA datasets, as an unseen evaluation dataset, and as an out-of-domain check with different question style and information distribution. Papers do not link it to any other measurement instrument.

## Sources

**[Long-Context LLMs Meet RAG: Overcoming Challenges for Long Inputs in RAG](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df5b1f121c915d8bdd00db6aac20827-Paper-Conference.pdf)**
> A dataset of complex or adversarial questions, used as an unseen evaluation task for RAG-tuned models.

## Relationships

### → Bamboogle
- **Multi-hop question answering** (behaviors tasks) — *measured_by*
  > To evaluate the ability of different models to answer complex questions, we selected four complex question answering datasets: ... (4) Bamboogle (Press et al., 2023) (Section 3.1).
  - [GRAT: Guiding Retrieval-Augmented Reasoning through Process Rewards Tree Search](https://aclanthology.org/2025.acl-long.1352.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > For QA, we conduct experiments on three widely used datasets: Bamboogle [17], WikiMultiHopQA [52], and HotpotQA [53]. (Section 5.1)
  - [Chain of Preference Optimization: Improving Chain-of-Thought Reasoning in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/00d80722b756de0166523a87805dd00f-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > For out-of-domain evaluation, we introduce three datasets that differ significantly in question style and information distribution: MuSiQue (Trivedi et al., 2022), Bamboogle (Press et al., 2022)... These datasets test the model’s generalization ability beyond the training domain. (Section 4.2.1)
  - [DeepResearcher: Scaling Deep Research via Reinforcement Learning in Real-world Environments](https://aclanthology.org/2025.emnlp-main.22.pdf)
- **Compositional reasoning** (constructs) — *measured_by*
  > Bamboogle (Press et al., 2023) includes complex questions that Google answers incorrectly, assessing compositional reasoning. (Section 4.1)
  - [Search-o1: Agentic Search-Enhanced Large Reasoning Models](https://aclanthology.org/2025.emnlp-main.276.pdf)
