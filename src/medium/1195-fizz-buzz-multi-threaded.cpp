#include <cstdio>
#include <condition_variable>
#include <mutex>
#include "functional"

class FizzBuzz {
public:
  explicit FizzBuzz(int n) {
    this->n = n;
  }

  auto fizz(const std::function<void()> &consume) -> void {
    while (i <= n) {
      std::unique_lock<std::mutex> lock(key);
      while (i <= n and (i % 3 == 0 and i % 5 != 0) == 0) barrier.wait(lock);

      if (i <= n) {
        consume();
        ++i;
      }

      barrier.notify_all();
    }
  }

  auto buzz(const std::function<void()> &consume) -> void {
    while (i <= n) {
      std::unique_lock<std::mutex> lock(key);
      while (i <= n and (i % 3 != 0 and i % 5 == 0) == 0) barrier.wait(lock);

      if (i <= n) {
        consume();
        ++i;
      }

      barrier.notify_all();
    }
  }

  auto fizzbuzz(const std::function<void()> &consume) -> void {
    while (i <= n) {
      std::unique_lock<std::mutex> lock(key);
      while (i <= n and (i % 3 == 0 and i % 5 == 0) == 0) barrier.wait(lock);

      if (i <= n) {
        consume();
        ++i;
      }

      barrier.notify_all();
    }
  }

  auto number(const std::function<void(int)> &consume) -> void {
    while (i <= n) {
      std::unique_lock<std::mutex> lock(key);
      while (i <= n and (i % 3 != 0 and i % 5 != 0) == 0) barrier.wait(lock);

      if (i <= n) {
        consume(i);
        ++i;
      }

      barrier.notify_all();
    }
  }

private:
  int n;
  std::mutex key;
  std::condition_variable barrier;
  int i = 1;
};
