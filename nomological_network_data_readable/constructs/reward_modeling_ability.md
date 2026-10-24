# Reward modeling ability
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Reward modeling, Reward modeling capability  

## State of the Field

Across the provided literature, reward modeling is characterized as a model's ability to generate guiding signals based on preferences or observations. The definitions vary slightly in scope: one frames it more broadly as the ability to "infer or construct reward signals... to guide an RL agent," while another specifies it as the "latent ability... to accurately score the quality of a generated response in a way that reflects human preferences." This construct is operationalized through the training of a reward model (RM), which, as one paper notes, relies on "high-quality labels typically provided by human experts or advanced AI system." Other approaches mentioned for improving this capability include using synthetic data or learning from self-feedback. The provided work suggests that reward modeling causally influences human preference alignment. As one study reports, a reward model's signals enable an LLM's policy updates to "align better with subtle distinctions in response quality," and its integration with policy learning is also noted.

## Sources

**[SELF-EVOLVED REWARD LEARNING FOR LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/26f5a4e26c13d1e0a47f46790c999361-Paper-Conference.pdf) (as "Reward modeling capability")**
> The latent ability of a model to accurately score the quality of a generated response in a way that reflects human preferences.

**[On the Modeling Capabilities of Large Language Models for Sequential Decision Making](https://proceedings.iclr.cc/paper_files/paper/2025/file/368cba57d00902c752eaa9e4770bbbbe-Paper-Conference.pdf) (as "Reward modeling")**
> The ability to infer or construct reward signals from observations, preferences, or latent representations so they can guide an RL agent.

## Relationships

### Reward modeling ability →
- **Human preference alignment** (constructs) — *causes*
  > By leveraging the evolved reward model’s nuanced signals, the LLM’s policy updates align better with subtle distinctions in response quality. (Section 3, STEP 4)
  - [SELF-EVOLVED REWARD LEARNING FOR LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/26f5a4e26c13d1e0a47f46790c999361-Paper-Conference.pdf)
- **HH-RLHF** (measurements) — *measured_by*
  > The results of reward modeling on the HH-RLHF, Ultrafeedback, Summarize, and Stack-overflow. (Table 1 caption)
  - [SELF-EVOLVED REWARD LEARNING FOR LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/26f5a4e26c13d1e0a47f46790c999361-Paper-Conference.pdf)
- **UltraFeedback** (measurements) — *measured_by*
  > The results of reward modeling on the HH-RLHF, Ultrafeedback, Summarize, and Stack-overflow. (Table 1 caption)
  - [SELF-EVOLVED REWARD LEARNING FOR LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/26f5a4e26c13d1e0a47f46790c999361-Paper-Conference.pdf)
