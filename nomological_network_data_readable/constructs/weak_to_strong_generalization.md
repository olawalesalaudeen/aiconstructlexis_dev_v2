# Weak-to-strong generalization
**Type:** Construct  
**Referenced in:** 13 papers  
**Also known as:** Weak to strong generalization, Weak-to-Strong generalization  

## State of the Field

**Definition agreement:** Consensus. Essentially all papers define weak-to-strong generalization as the phenomenon that a stronger model, trained on labels, demonstrations, or supervision from a weaker model or source, can still outperform that weak supervisor on the target task. A few papers add emphasis on recovering the strong model's latent capabilities, avoiding overfitting to noisy weak labels, or generalizing beyond the supervisor's knowledge, but these are refinements of the same core phenomenon rather than different constructs.

**Space of definitions.** Across the papers, the prevailing usage describes weak-to-strong generalization as a strong or more powerful model trained on labels, supervision, or demonstrations from a weaker model nevertheless achieving performance above the weak source or weak supervisor. Several papers sharpen this by saying the strong model is not merely copying the weak model but learning the task's intent and rules, or generalizing an alignment objective beyond the weak supervisor's knowledge boundary. A smaller framing makes capability recovery more explicit, describing the construct as eliciting latent knowledge, recovering part or all of the strong model's full capabilities, or reaching its full potential despite noisy weak labels.

**Space of facets.** Papers use the label at several levels: as a phenomenon, as an ability of the stronger model, and as a training paradigm or approach in which a strong model is supervised by a weaker one. The same family of usage also appears under nearby names such as weaker-to-strong generalization and Weak-to-Strong, and some authors tie it specifically to capability elicitation, latent knowledge, or supervision toward an alignment target rather than simple imitation of weak labels.

**Space of measurement.** It is linked to no measurement instruments and no behavioral indicators. Papers instead describe it operationally as training a stronger model on data labeled by a weaker model and treating success as the stronger model outperforming the weak supervisor, sometimes phrased as recovering part of the strong model's performance, eliciting its capabilities, or extending performance beyond the weak supervisor's knowledge boundary. Where papers spell out the test, this operationalization matches the dominant definition, though some descriptions set a stronger target of recovering the model's full capabilities rather than only beating the weak source.

**Links.** Papers link it to 4 constructs. One paper claims a causal relationship from parametric knowledge to weak-to-strong generalization, stating that eliciting latent knowledge from pre-trained LLMs makes it possible. One paper reports that it correlates with overfitting, with erroneous weak labels potentially leading strong models to overfit, and two other papers treat it as related to generalization and to critique ability, the latter through a similar setup where relatively weaker critics guide stronger task-performing models.

## Sources

**[Stress-Testing Capability Elicitation With Password-Locked Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ff97417474268e6b5a38bcbfae04944-Paper-Conference.pdf)**
> The phenomenon where training on weaker demonstrations or weaker supervision still yields performance above the weak source policy.

**[Weak to Strong Generalization for Large Language Models with Multi-capabilities](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ebcb8f051d0c178474619bbfb32b340-Paper-Conference.pdf) (as "Weak to strong generalization")**
> The ability of a more powerful model to learn a task and surpass the performance of a weaker supervisor model by training on data labeled by that weaker model.

**[Bayesian WeakS-to-Strong from Text Classification to Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/495e55f361708bedbab5d81f92048dcd-Paper-Conference.pdf) (as "Weak-to-Strong generalization")**
> The ability of a stronger model to recover its full capabilities when supervised only by the labels from a weaker, less capable model.

## Relationships

### → Weak-to-strong generalization
- **Parametric knowledge** (constructs) — *causes*
  > We prove that weak-to-strong generalization is possible by eliciting latent knowledge from pre-trained LLMs.
  - [A transfer learning framework for weak to strong generalization](https://proceedings.iclr.cc/paper_files/paper/2025/file/fa47ffc7b2033fd32d8b8734686f6ff4-Paper-Conference.pdf)

### Associated with
- **Critique ability** (constructs)
  > Our experiments demonstrate that relatively weaker critic models can effectively guide stronger task-performing models such as GPT-4o (Table 3), exhibiting a similar phenomenon to weak-to-strong generalization (Christiano et al., 2018; Burns et al., 2023), where weaker models can be trained to effectively supervise more capable ones. (Section 1)
  - [Teaching Language Models to Critique via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xie25a/xie25a.pdf)
- **Overfitting** (constructs)
  > Although weak-to-strong generalization exhibiting certain generalization capabilities, strong models exhibit significant overfitting in weak-to-strong generalization: Due to the strong fit ability of strong models, erroneous labels from weak supervisors may lead to overfitting in strong models. (Section 1)
  - [How to Mitigate Overfitting in Weak-to-strong Generalization?](https://aclanthology.org/2025.acl-long.784.pdf)
