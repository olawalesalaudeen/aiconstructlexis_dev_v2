# Training stability
**Type:** Construct  
**Referenced in:** 26 papers  
**Also known as:** Training dynamics stability, Training instability, Feature learning stability, Policy stability, Catastrophic collapse  

## State of the Field

Across the surveyed literature, training stability is predominantly defined as a property of the training process characterized by smooth convergence and the absence of divergent behaviors. The most common framing, found in numerous papers, centers on avoiding issues like loss spikes, escalating gradient norms, and the frequent need for interventions such as gradient clipping. This construct is operationalized by observing several indicators of its inverse, instability, which include sudden increases in KL divergence, oscillating training curves, and performance degradation on the training set itself. Conversely, stability is evidenced by consistent increases in reward, stable value predictions in reinforcement learning, and loss curves that decline smoothly, as one paper notes, "The loss of ‘Zero-initialized’ declines much faster at the beginning, and finally converges to zero" (LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention). This concept is applied across various contexts, including pre-training, fine-tuning, and reinforcement learning with human feedback. A less common, more mechanistic definition treats stability as the degree to which internal model states like activations, gradients, and weight updates remain well-scaled. Papers frequently investigate how stability is affected by choices of optimizers, initialization strategies, regularization techniques, and finetuning methods like LoRA.

## Sources

**[$\mathcal{B}$-Coder: Value-Based Deep Reinforcement Learning for Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/7e9c2053258b1bdd32ff2654802cd594-Paper-Conference.pdf)**
> The property of the training process characterized by smooth convergence and infrequent need for interventions like gradient clipping to prevent divergence or loss spikes.

**[Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf) (as "Training dynamics stability")**
> The degree to which activations, gradients, and weight updates remain well-scaled and do not vanish or explode as sparsity or width changes.

**[YuLan-Mini: Pushing the Limits of Open Data-efficient Language Model](https://aclanthology.org/2025.acl-long.268.pdf) (as "Training instability")**
> A phenomenon during model training characterized by issues like loss spikes, escalating gradient norms, and divergent updates, which hinder effective model convergence.

**[u-$\mu$P: The Unit-Scaled Maximal Update Parametrization](https://proceedings.iclr.cc/paper_files/paper/2025/file/e3130a164f5c724e37271b93bc76dd28-Paper-Conference.pdf) (as "Feature learning stability")**
> The property of a model's training dynamics where different components learn at balanced rates, avoiding situations where some parts learn too quickly or slowly relative to others.

**[WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/c66e1fcc9691aae706250638f36f681b-Paper-Conference.pdf) (as "Policy stability")**
> The degree to which the agent's policy avoids excessive drift across training phases while still improving on new tasks.

**[Design Considerations in Offline Preference-based RL](https://raw.githubusercontent.com/mlresearch/v267/main/assets/agarwal25a/agarwal25a.pdf) (as "Catastrophic collapse")**
> A failure mode in training where model performance sharply deteriorates after an initial improvement, often linked to unstable optimization dynamics in preference learning.

## Relationships

### → Training stability
- **Generalization** (constructs) — *correlates*
  > Experimental results indicate that our approach significantly enhances training stability and model generalization. (Section 1)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **Knowledge retention** (constructs) — *causes*
  > The knowledge retention weights penalty can improve the training stability of the PPO algorithm. (Section 4.3)
  - [CPPO: Continual Learning for Reinforcement Learning with Human Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/6246f93ebf4f2d76ad2bcb3158220d34-Paper-Conference.pdf)
- **System 2 thinking** (constructs) — *causes*
  > fast thinking without CoT leads to larger gradients and larger differences of gradients across layers than slow thinking (Detailed CoT), indicating the learning stability brought by the latter. (Abstract)
  - [What Happened in LLMs Layers when Trained for Fast vs. Slow Thinking: A Gradient Perspective](https://aclanthology.org/2025.acl-long.1545.pdf)
- **Log-likelihood collapse** (constructs) — *causes*
  > We suspect that this degeneration of log-likelihoods is responsible for the eventual collapse observed for the logistic loss in Figure 1.
  - [Design Considerations in Offline Preference-based RL](https://raw.githubusercontent.com/mlresearch/v267/main/assets/agarwal25a/agarwal25a.pdf)
